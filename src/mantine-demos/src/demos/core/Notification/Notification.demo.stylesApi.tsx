import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Box, Notification } from '@mantine/core';
import { NotificationStylesApi } from '@mantine/styles-api';
import { IconCheck } from '@tabler/icons-react';

const code = `
import { Notification } from '@mantine/core';

function Demo() {
  return <Notification{{props}} />;
}
`;

function Demo(props: any) {
  return (
    <Box maw={400} mx="auto">
      <Notification onClose={() => {}} title="We notify you that" {...props}>
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
      <Notification mt="md" onClose={() => {}} title="We notify you that" loading {...props}>
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
      <Notification
        mt="md"
        icon={<IconCheck size="1.2rem" />}
        onClose={() => {}}
        title="We notify you that"
        withBorder
        {...props}
      >
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
    </Box>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: NotificationStylesApi,
  centered: true,
  component: Demo,
  code,
};
