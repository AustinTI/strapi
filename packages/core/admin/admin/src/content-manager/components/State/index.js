import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Text } from '@strapi/design-system/Text';
import { Box } from '@strapi/design-system/Box';
import { getTrad } from '../../utils';

const State = ({ isPublished }) => {
  const { formatMessage } = useIntl();
  const content = formatMessage({
    id: getTrad(`containers.List.${isPublished ? 'published' : 'draft'}`),
  });
  const background = isPublished ? 'success100' : 'secondary100';
  const textColor = isPublished ? 'success700' : 'secondary700';

  return (
    <Box
      background={background}
      hasRadius
      paddingTop={1}
      paddingBottom={1}
      paddingLeft={2}
      paddingRight={2}
      style={{ width: 'fit-content' }}
    >
      <Text bold textColor={textColor}>
        {content}
      </Text>
    </Box>
  );
};

State.propTypes = {
  isPublished: PropTypes.bool.isRequired,
};

export default State;
