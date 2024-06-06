import Button from "./Button";

export default function Benefits() {
  return (
    <div id="benefits" className="pt-10">
      <div className="flex h-full w-full flex-col items-center justify-center gap-20 p-5 ">
        <div className="flex w-full flex-col justify-center gap-20 lg:flex-row  lg:justify-evenly lg:gap-0   ">
          <div className="flex w-full flex-col gap-5 lg:w-2/5 xl:w-1/3">
            <h2>Save Time with Preconfigured Software</h2>
            <div className="flex flex-col gap-5">
              <p>
                Launching Dappnode has never been easier! With our Amazon Image
                Marketplace version, you bypass the process of manual
                installation and setup.
              </p>
              <p>
                The AMI comes preconfigured and ready to run - all within the
                comfortable environment of your chosen EC2 instance. No need for
                any hardware maintenance or update worries.
              </p>
              <p>
                You can now focus on what truly matters - testing, staking and
                building on your decentralized applications.
              </p>
            </div>
          </div>
          <div className="flex w-full  flex-col gap-5 lg:w-2/5 xl:w-1/3">
            <h2>Experience before commitment</h2>
            <div className="flex flex-col gap-5">
              <p>
                Are you intrigued by the capabilities of Dappnode but hesitant
                about investing in hardware or setting it up on your own? The
                cloud version of Dappnode is your perfect sandbox. Test run and
                familiarize yourself with all Dappnode features without the need
                for any hardware commitment.
              </p>
              <p>
                Whether you're contemplating the purchase of a node or you're a
                developer aiming to explore the full potential of Dappnode, our
                cloud-based version offers an affordable and adaptable platform
                to experience the comprehensive capabilities of Dappnode.
              </p>
            </div>
          </div>
        </div>

        <Button>Try Dappnode Cloud for free</Button>
      </div>
    </div>
  );
}
