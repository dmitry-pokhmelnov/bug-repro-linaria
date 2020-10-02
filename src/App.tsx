import React, { Suspense } from "react";

const First = () => {
  const TestComponentLazy = React.lazy(async () => {
    const { RedTestComponent } = await import("./RedTestComponent");
    return { default: RedTestComponent };
  });
  return (
    <Suspense fallback={<>First loading...</>}>
      <TestComponentLazy />
    </Suspense>
  );
};

const Second = () => {
  const TestComponentLazy = React.lazy(async () => {
    const { GreenTestComponent } = await import("./GreenTestComponent");
    return { default: GreenTestComponent };
  });
  return (
    <Suspense fallback={<>Second loading...</>}>
      <TestComponentLazy />
    </Suspense>
  );
};

const Third = () => {
  const TestComponentLazy = React.lazy(async () => {
    const { BlueTestComponent } = await import("./BlueTestComponent");
    return { default: BlueTestComponent };
  });
  return (
    <Suspense fallback={<>Third loading...</>}>
      <TestComponentLazy />
    </Suspense>
  );
};

function App() {
  return (
    <Suspense fallback={<>App loading...</>}>
      <First />
      <Second />
      <Third />
    </Suspense>
  );
}

export default App;
