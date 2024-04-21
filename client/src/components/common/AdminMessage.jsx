import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Image } from "@mantine/core";
import AdminForm from "./AdminForm";
import classes from "./AdminMessage.module.css";
import { send } from "../../assets";
import { useSelector } from "react-redux";

export default function AdminModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  console.log("loggedInUser", loggedInUser);

  if (!loggedInUser || loggedInUser.fullName !== "admin") return null;

  return (
    <>
      <Modal opened={opened} onClose={close} title="Massage all users" centered>
        <AdminForm close={close} />
      </Modal>

      <Image src={send} className={classes.sendButton} onClick={open} />
    </>
  );
}
