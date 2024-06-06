import Button from "./Button";

export default function Basics() {
  return (
    <div
      className="flex w-full items-center justify-center bg-purple-100 p-5 dark:bg-indigo-950 md:py-36"
      id="basics"
    >
      <div className="flex w-full flex-col  items-center justify-center gap-10 text-center md:w-4/5 xl:w-3/5">
        <h2>What is Dappnode Cloud?</h2>
        <div className="flex flex-col gap-10">
          <p>
            Dappnode is expanding its horizon! We're bringing our portal to
            decentralization to the cloud through the Amazon Image Marketplace.
          </p>
          <p>
            Our unique Dappnode AMI has been meticulously crafted to align
            seamlessly with a cloud environment presenting an ideal solution for
            those keen to experiment with Dappnode without the constraints of a
            dedicated hardware setup.
          </p>
          <p>
            Packaged neatly, pre-configured for simplicity, and optimized for
            smooth operation, Dappnode is now more accessible than ever, even to
            those who may not possess the necessary resources or technical
            know-how to run it independently.
          </p>
        </div>
        <Button>Try Dappnode on AWS </Button>
      </div>
    </div>
  );
}
