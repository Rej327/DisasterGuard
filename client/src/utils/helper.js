import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const fromNow = (dateUploaded) => {
  dayjs.extend(relativeTime);
  return dayjs(dateUploaded).fromNow();
};
