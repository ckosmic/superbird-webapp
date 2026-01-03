import { useEffect, useState } from 'react';
import styles from './Clock.module.scss';

type Props = {
  offsetMinutes?: number;
};

const Clock = ({
  offsetMinutes = 0,
}: Props) => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 5000);
    return () => clearInterval(interval);
  }, []);

  const MS_PER_MINUTE = 60000;

  const getUtcDate = (date: Date) => {
    return new Date(date.getTime() + date.getTimezoneOffset() * MS_PER_MINUTE);
  }

  const isUsDst = (dateUtc: Date) => {
    const year = dateUtc.getUTCFullYear();

    // Second Sunday in March at 2am local (10am UTC for US offsets)
    const march = new Date(Date.UTC(year, 2, 1));
    const marchSunday = (7 - march.getUTCDay()) % 7;
    const dstStart = new Date(
      Date.UTC(year, 2, 1 + marchSunday + 7, 10)
    );

    // First Sunday in November at 2am local (9am UTC)
    const november = new Date(Date.UTC(year, 10, 1));
    const novemberSunday = (7 - november.getUTCDay()) % 7;
    const dstEnd = new Date(
      Date.UTC(year, 10, 1 + novemberSunday, 9)
    );

    return dateUtc >= dstStart && dateUtc < dstEnd;
  }

  const formatTimeWithOffset = (date: Date, standardOffsetMinutes: number, observeDst = true) => {
    const utc = getUtcDate(date);

    let offset = standardOffsetMinutes;

    if (observeDst && isUsDst(utc)) {
      offset += 60; // US DST shift
    }

    const zonedDate = new Date(
      utc.getTime() + offset * MS_PER_MINUTE
    );

    let hours = zonedDate.getHours();
    const minutes = zonedDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  return (
    <div className={styles.container} data-testid="clock">
      {formatTimeWithOffset(time, offsetMinutes)}
    </div>
  );
};

export default Clock;
