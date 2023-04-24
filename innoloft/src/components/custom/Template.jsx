import React from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

function Template(props) {
  const {
    Bold,
    Italic,
    AlignLeft,
    AlignRight,
    AlignCenter,
    AlignJustify,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    Link,
    Unlink,
  } = EditorTools;
  return (
    <Editor
      tools={[
        [Bold, Italic],
        [UnorderedList, OrderedList],
        [AlignLeft, AlignCenter, AlignRight, AlignJustify],
        [Link, Unlink],
        [Undo, Redo],
      ]}
      {...props}
      contentStyle={{ height: 320 }}
    />
  );
}

export default Template;
