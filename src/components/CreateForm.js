import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RxTriangleDown } from 'react-icons/rx'
import Input from '@/components/Input'

export default function CreateForm({ open, setOpen }) {
  const allSubject = [
    { id: 1, name: 'PSCP', unavailable: false },
    { id: 2, name: 'ICS', unavailable: false },
    { id: 3, name: 'ITF', unavailable: false },
    { id: 4, name: 'MFIT', unavailable: true },
    { id: 5, name: 'CHARM', unavailable: false },
    { id: 6, name: 'FE', unavailable: false },
    { id: 7, name: 'OTHERS', unavailable: false },
  ]
  const [subject, setsubject] = useState(allSubject[0])
  const allCategory = [
    { id: 1, name: "Primary", unavailable: false },
    { id: 2, name: "Asssignment", unavailable: false },
    { id: 3, name: "News", unavailable: false },
    { id: 4, name: "Platform", unavailable: false },
  ]
  const [category, setcategory] = useState(allCategory[0])
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-96 h-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className='w-full flex flex-col justify-center h-full'>
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900 mb-5"
                    >
                      Add Task
                    </Dialog.Title>
                    {/* HELLO MOTHER FUCKER */}
                    <div className="flex flex-col justify-between flex-grow gap-5">
                      <div className='flex-grow'>
                        <Listbox value={subject} onChange={setsubject}>
                          <label className="text-xs text-black ">
                            Subject
                          </label>
                          <div className="relative mt-1 z-30">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                              <span className="block truncate">{subject.name}</span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <RxTriangleDown className='flex text-black' color='black'/>
                              </span>
                            </Listbox.Button>
                            <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {allSubject.map((person, personIdx) => (
                                  <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                      }`
                                    }
                                    value={person}
                                  >
                                    {({ subject }) => (
                                      <>
                                        <span
                                          className={`block truncate ${subject ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                          {person.name}
                                        </span>
                                        {subject ? (
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>
                        <div>
                          <label className="text-xs text-black ">
                            Description
                          </label>
                          <Input
                            type="text"
                            placeholder="description"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-black ">
                            Category
                          </label>
                          <Listbox value={allCategory} onChange={setcategory}>
                            <label className="text-xs text-black ">
                            </label>
                            <div className="relative mt-1 z-20">
                              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{category.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <RxTriangleDown className='flex text-black' color='black'/>
                                </span>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                  {allCategory.map((person, personIdx) => (
                                    <Listbox.Option
                                      key={personIdx}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                      }
                                      value={person}
                                    >
                                      {({ subject }) => (
                                        <>
                                          <span
                                            className={`block truncate ${subject ? 'font-medium' : 'font-normal'
                                              }`}
                                          >
                                            {person.name}
                                          </span>
                                          {subject ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                        </div>
                      </div>

                      <div className="flex items-end mt-4">
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-3 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => setOpen(false)}
                        >
                          submit
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition >
    </>
  )
}