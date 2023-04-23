import React from 'react'

const Food = () => {
  return (
    <div className="bg-gradient-to-bl from-white to-yellow-100 bg-fixed bg-cover w-full min-h-screen">
      <div className="w-full p-4 flex flex-col gap-4 ">
        <h1 className="w-full flex justify-center text-4xl text-yellow-400 font-dance font-semibold">
          Smokey's Food menu
        </h1>
        <h3 className="font-semibold text-sm text-white bg-yellow-400 w-fit block mx-auto p-1">
          Main course:
        </h3>
        <div className="w-full gap-1 text-sm">
          <div className="grid grid-cols-6 h-24 font-abel pl-2">
            <div className="col-span-5 flex items-center justify-start border-b border-dashed font-semibold">
              Beef Scaloppini
            </div>
            <div className="col-span-5 flex items-center justify-start row-span-2">
              Marinated beef with ashed potato
            </div>
            <div className="col-end-7 col-span-1 row-span-3 row-start-1 flex items-center justify-center">
              9,000
            </div>
          </div>
          <div className="grid grid-cols-6 h-24 font-abel pl-2">
            <div className="col-span-5 flex items-center justify-start border-b border-dashed font-semibold">
              Chicken Mushroom
            </div>
            <div className="col-span-5 flex items-center justify-start row-span-2">
              Rosemary marinated chicken breast, mushroom sauce, mashed potato
            </div>
            <div className="col-end-7 col-span-1 row-span-3 row-start-1 flex items-center justify-center">
              9,000
            </div>
          </div>
          <div className="grid grid-cols-6 h-24 font-abel pl-2">
            <div className="col-span-5 flex items-center justify-start border-b border-dashed font-semibold">
              Fillet Steak
            </div>
            <div className="col-span-5 flex items-center justify-start row-span-2">
              Australian steak, potato gratin, your choice of mushroom or pepper
              sauce
            </div>
            <div className="col-end-7 col-span-1 row-span-3 row-start-1 flex items-center justify-center">
              28,000
            </div>
          </div>
          <div className="grid grid-cols-6 h-24 font-abel pl-2">
            <div className="col-span-5 flex items-center justify-start border-b border-dashed font-semibold">
              Rib eye Steak
            </div>
            <div className="col-span-5 flex items-center justify-start row-span-2">
              Australian rib eye, potato gratin, your choice of mushroom or
              pepper sauce
            </div>
            <div className="col-end-7 col-span-1 row-span-3 row-start-1 flex items-center justify-center">
              30,000
            </div>
          </div>
          <div className="grid grid-cols-6 h-24 font-abel pl-2">
            <div className="col-span-5 flex items-center justify-start border-b border-dashed font-semibold">
              Sirloin Steak
            </div>
            <div className="col-span-5 flex items-center justify-start row-span-2">
              Australian sirloin, potato gratin, your choice of mushroom or
              pepper sauce
            </div>
            <div className="col-end-7 col-span-1 row-span-3 row-start-1 flex items-center justify-center">
              28,000
            </div>
          </div>
          <div className="grid grid-cols-6 h-24 font-abel pl-2">
            <div className="col-span-5 flex items-center justify-start border-b border-dashed font-semibold">
              Chicken Lap
            </div>
            <div className="col-span-5 flex items-center justify-start row-span-2">
              Chicken lap, mashed potato, hoisin sauce, plum, strawberry,
              blueberry
            </div>
            <div className="col-end-7 col-span-1 row-span-3 row-start-1 flex items-center justify-center">
              9,000
            </div>
          </div>
          <div className="grid grid-cols-6 h-24 font-abel pl-2">
            <div className="col-span-5 flex items-center justify-start border-b border-dashed font-semibold">
              Baby Chicken
            </div>
            <div className="col-span-5 flex items-center justify-start row-span-2">
              Baby chicken with grilled vegetables
            </div>
            <div className="col-end-7 col-span-1 row-span-3 row-start-1 flex items-center justify-center">
              15,000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food