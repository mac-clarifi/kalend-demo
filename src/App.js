import "./styles.css";

import Kalend, { CalendarView } from "kalend"; // import component
import "kalend/dist/styles/index.css"; // import styles

const onEventClick = () => {
  console.log("on event click");
};
const onNewEventClick = () => {
  console.log("on new event click");
};

const onSelectView = () => {
  console.log("on select view");
};

const selectedView = () => {
  console.log("on selected view");
};

const onPageChange = () => {
  console.log("on page change");
};

function App() {
  return (
    <>
      <Kalend
        onEventClick={onEventClick}
        onNewEventClick={onNewEventClick}
        events={[]}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        disabledViews={[CalendarView.DAY]}
        onSelectView={onSelectView}
        selectedView={selectedView}
        onPageChange={onPageChange}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"en"}
      />
    </>
  );
}

export default App;
