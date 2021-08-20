import React, { useState } from "react";

import { TextInput, TextInputProps } from "react-native";

const AutoExpandingTextInput: React.FunctionComponent<TextInputProps> = (
  props: TextInputProps
) => {
  const { style } = props;
  const [height, setHeight] = useState(0);
  return (
    <TextInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      multiline
      onContentSizeChange={(event) => {
        setHeight(event.nativeEvent.contentSize.height);
      }}
      style={[style, { height: Math.max(35, height) }]}
    />
  );
};

export default AutoExpandingTextInput;
