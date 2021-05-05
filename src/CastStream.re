open Stream;

external toBuffer : 'a => Node.buffer = "%identity";

type bufferClassification =
  | Buf(Node.buffer)
  | Str(string)
  | JsType(Js.Types.tagged_t);

let classifyDataOutput = (bufOrStr: dataOut) : bufferClassification =>
  if (Node.Buffer.isBuffer(bufOrStr)) {
    Buf(toBuffer(bufOrStr));
  } else {
    let classified = Js.Types.classify(bufOrStr);
    switch (classified) {
    | Js.Types.JSString(str) => Str(str)
    | _ => JsType(classified)
    };
  };
