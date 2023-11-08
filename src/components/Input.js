"use client";

export default function input(props) {
  return (
    <>
      <input
        {...props}
        className="mt-1 dark:focus:bg-black/15 px-4 py-2.5 w-full focus:pl-6 outline-none focus:outline-none rounded-md border-transparent focus:border-gray-500 focus:bg-black/10 bg-black/5 dark:bg-black/10 focus:dark:bg-black/15 text-sm transition-all font-medium text-black"
      />
    </>
  );
}