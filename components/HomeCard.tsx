export default function HomeCard() {
  return (
    <div className="border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div>
            <img
              className="h-12 w-12 rounded-full"
              src="/images/psg.png"
              alt="psg"
            />
          </div>
          <div className="text-sm">
            <div className="flex gap-1  items-center">
              <span>psg</span>
              <span className="">.</span>
              <span className="text-grey-400">2 h</span>
            </div>
            <div>
              <p>Parc Des Princes</p>
            </div>
          </div>
        </div>
        <div className="text-xl font-bold">...</div>
      </div>
      <div className="bg-black mt-2">
        <img
          style={{ height: "480px" }}
          className="px-16 w-full"
          src="/images/rice.jpg"
          alt=""
        />
      </div>
      <div className="flex mt-2 justify-between">
        <div className="flex gap-3">
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
        </div>
        <div className=" flex justify-end">left</div>
      </div>
      <div className="mt-2">
        <p>1000 likes</p>
      </div>
      <div className="mt-2 flex justify-start gap-1">
        <p className="font-bold">psg</p>
        <p>new signing is pending, Declan Rice</p>
      </div>
      <div className="mt-2">
        <p>View all 200 comments</p>
      </div>
      <div className="mt-2 flex justify-start gap-1">
        <p className="font-bold">Smith</p>
        <p>beautiful player declan</p>
      </div>
      <div className="mt-2">
        <form action="">
          <input
            type="text"
            className="focus:outline-none py-2"
            placeholder="Add a comment"
          />
        </form>
      </div>
    </div>
  );
}
