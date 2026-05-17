import { BsThreeDotsVertical } from "react-icons/bs";
import "./../index.css";

const CallHistory = () => {
  return (
    <div className="space-y-8 p-4 rounded-lg lg:w-2/3 mx-auto">
      <div className="relative">
        <p className="text-muted mb-3">April 29th</p>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-custom-accent text-color-base rounded-lg w-10 h-10 flex items-center justify-center">
                  K
                </div>
                <div>
                  <h5>Design Call</h5>
                  <div className="flex">
                    <div className="w-5 h-5 border bg-neutral-200 rounded-full"></div>
                    <div className="w-5 h-5 border bg-neutral-200 rounded-full -translate-x-2"></div>
                    <div className="w-5 h-5 border bg-neutral-200 rounded-full -translate-x-4"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-sm text-muted">10:00 AM</p>
                <span>
                  <BsThreeDotsVertical />
                </span>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-custom-accent text-color-base rounded-lg w-10 h-10 flex items-center justify-center">
                    K
                  </div>
                  <div>
                    <h5>Design Call</h5>
                    <div className="flex">
                      <div className="w-5 h-5 border bg-neutral-200 rounded-full"></div>
                      <div className="w-5 h-5 border bg-neutral-200 rounded-full -translate-x-2"></div>
                      <div className="w-5 h-5 border bg-neutral-200 rounded-full -translate-x-4"></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="text-sm text-muted">10:00 AM</p>
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <p className="text-muted mb-3">April 30th</p>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-custom-accent text-color-base rounded-lg w-10 h-10 flex items-center justify-center">
                  K
                </div>
                <div>
                  <h5>Design Call</h5>
                  <div className="flex">
                    <div className="w-5 h-5 border bg-neutral-200 rounded-full"></div>
                    <div className="w-5 h-5 border bg-neutral-200 rounded-full -translate-x-2"></div>
                    <div className="w-5 h-5 border bg-neutral-200 rounded-full -translate-x-4"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-sm text-muted">10:00 AM</p>
                <span>
                  <BsThreeDotsVertical />
                </span>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-custom-accent text-color-base rounded-lg w-10 h-10 flex items-center justify-center">
                    K
                  </div>
                  <div>
                    <h5>Design Call</h5>
                    <div className="flex">
                      <div className="w-5 h-5 border bg-neutral-200 rounded-full"></div>
                      <div className="w-5 h-5 border bg-neutral-200 rounded-full -translate-x-2"></div>
                      <div className="w-5 h-5 border bg-neutral-200 rounded-full -translate-x-4"></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="text-sm text-muted">10:00 AM</p>
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallHistory;
