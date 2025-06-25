import React, { useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TimeInterval() {
    const [time, setTime] = useState({
    years: "00",
    months: "00",
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
    
  useEffect(() => {
    const interval = setInterval(() => {
      // Waktu sekarang
      let currentTime = new Date();

      // Waktu target: 13 Juni 2024
      let targetDate = new Date("2024-06-13");

      // Hitung selisih waktu dalam milidetik
      let timeDifference = currentTime - targetDate;

      // Jika waktu sudah lewat, stop interval
      if (timeDifference < 0) {
        clearInterval(interval);
        return;
      }

      // Hitung tahun
      let years = currentTime.getFullYear() - targetDate.getFullYear();
      let months = currentTime.getMonth() - targetDate.getMonth();
      let days = currentTime.getDate() - targetDate.getDate();

      // Jika bulan atau hari negatif, sesuaikan
      if (months < 0) {
        years--;
        months += 12;
      }

      if (days < 0) {
        months--;
        days += new Date(
          currentTime.getFullYear(),
          currentTime.getMonth(),
          0
        ).getDate();
      }

      // Hitung jam, menit, dan detik
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();

      // Update state
      setTime({
        years: years < 10 ? `0${years}` : years,
        months: months < 10 ? `0${months}` : months,
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    }, 1000);

    // Clear interval on cleanup
    return () => clearInterval(interval);
  }, [])

  return(
    <Row className="d-flex justify-content-center align-items-center min-vh-100 text-center mb-2">
              <Col className="timeInterval glow-text">
                <h1 className="display-4">Our Relationship Time Counts</h1>
                <h2 className="fs-5">
                  {time.years} years {time.months} months {time.days} days
                </h2>
                <h3 className="fs-1 fw-normal">
                  {time.hours}:{time.minutes}:{time.seconds}
                </h3>
                <h3>
                  Updated
                </h3>
              </Col>
            </Row>
  )
}

export default TimeInterval;