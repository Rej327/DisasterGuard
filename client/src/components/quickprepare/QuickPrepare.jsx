/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import React from "react";
import { useDisclosure, useListState, randomId } from "@mantine/hooks";
import {
  Modal,
  Button,
  Tabs,
  Group,
  Text,
  Flex,
  Box,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { Checkbox } from "@mantine/core";
import { EARTHQUAKE, quickPreparationData } from "../../data/data";
import { IconCheckbox, IconCircleCheck } from "@tabler/icons-react";
import DisasterVideo from "../disaster/header/DisasterVideo";

const initialValues = [
  { label: "Receive email notifications", checked: false, key: randomId() },
  { label: "Receive sms notifications", checked: false, key: randomId() },
  { label: "Receive push notifications", checked: false, key: randomId() },
];

const QuickPrepare = ({
  variant,
  size,
  radius,
  className,
  opened,
  open,
  close,
  preparationData,
}) => {
  const data =
    quickPreparationData[!!preparationData ? preparationData : EARTHQUAKE];
  //   const [opened, { open, close }] = useDisclosure(false);
  const [values, handlers] = useListState(data.tools);
  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  //   console.log("data-----------", data);

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      color="green"
      label={<Text contentEditable>{value.label}</Text>}
      key={value.key}
      checked={value.checked}
      onChange={(event) =>
        handlers.setItemProp(index, "checked", event.currentTarget.checked)
      }
    />
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Text fw="bold">{`${preparationData} Guides`}</Text>}
        centered
      >
        <Tabs defaultValue="instructions">
          <Tabs.List grow mb="md">
            <Tabs.Tab value="instructions">Instructions</Tabs.Tab>
            <Tabs.Tab value="tools">Tools</Tabs.Tab>
            <Tabs.Tab value="video-guide">Video Guide</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="instructions">
            <List
              c="dark"
              spacing="md"
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck
                    style={{
                      width: rem(12),
                      height: rem(12),
                    }}
                  />
                </ThemeIcon>
              }
            >
              {data.instruction.map((val, index) => (
                <List.Item style={{ fontSize: ".95rem" }} key={index}>
                  <span style={{ fontWeight: 900 }}>{val.title} </span>
                  {val.description}
                </List.Item>
              ))}
            </List>
          </Tabs.Panel>

          <Tabs.Panel py={10} value="tools">
            <Checkbox
              checked={allChecked}
              indeterminate={indeterminate}
              label={"Check all"}
              color="green"
              onChange={() =>
                handlers.setState((current) =>
                  current.map((value) => ({
                    ...value,
                    checked: !allChecked,
                  }))
                )
              }
            />
            {items}
          </Tabs.Panel>

          <Tabs.Panel value="video-guide">
            {data.evacuation.map((val) => (
              <DisasterVideo ytUrl={val} />
            ))}
          </Tabs.Panel>
        </Tabs>
      </Modal>
    </>
  );
};

export default QuickPrepare;
