'use client'
import { Dialog, Transition, Listbox } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { IoIosCreate } from 'react-icons/io';
import Input from '@/components/Input';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function CreateForm() {
  const [open, setOpen] = useState(false)
  const allSubject = [
    { id: 1, name: 'PSCP', unavailable: false },
    { id: 2, name: 'ICS', unavailable: false },
    { id: 3, name: 'ITF', unavailable: false },
    { id: 4, name: 'MFIT', unavailable: true },
    { id: 5, name: 'CHARM', unavailable: false },
    { id: 6, name: 'FE', unavailable: false },
    { id: 7, name: 'OTHERS', unavailable: false },
  ];
  const [subject, setSubject] = useState(allSubject[0]);
  const allCategory = [
    { id: 1, name: "Primary", unavailable: false },
    { id: 2, name: "Assignment", unavailable: false },
    { id: 3, name: "News", unavailable: false },
    { id: 4, name: "Platform", unavailable: false },
  ];
  const [category, setCategory] = useState(allCategory[0]);
  const [description, setDescription] = useState('');
  const router = useRouter()
  const handleSubmit = async () => {
    const id = toast.loading("กำลังสร้างข้อมูล...", {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    try {
      const { data } = await axios.post('http://localhost:3002/tasks', {
        category: category.name,
        subject: subject.name,
        description,
      });
      if (data) {
        toast.success(data.message, {
          id,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        setOpen(false);
      }
    } catch (error) {
      toast.error(error.message, { id });
    }
    router.refresh()
  };

  return (
    <>
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={() => setOpen(false)}>
          <div className="flex items-center justify-center min-h-screen p-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-96 h-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold uppercase leading-6 text-gray-900 mb-5 text-center"
                >
                  <div className='flex justify-center gap-1'>
                    <IoIosCreate />
                    <p>
                      Add Task
                    </p>
                  </div>
                </Dialog.Title>
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="text-xs text-black">
                      Subject
                    </label>
                    <Listbox value={subject} onChange={setSubject}>
                      <div className="relative mt-1 z-30">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">{subject.name}</span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {allSubject.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                              >
                                {({ active, selected }) => (
                                  <li
                                    className={`relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`}
                                  >
                                    {item.name}
                                    {selected && (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        ✓
                                      </span>
                                    )}
                                  </li>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>

                  <div>
                    <label className="text-xs text-black">
                      Category
                    </label>
                    <Listbox value={category} onChange={setCategory}>
                      <div className="relative mt-1 z-20">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">{category.name}</span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {allCategory.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                              >
                                {({ active, selected }) => (
                                  <li
                                    className={`relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`}
                                  >
                                    {item.name}
                                    {selected && (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        ✓
                                      </span>
                                    )}
                                  </li>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                </div>
                <div className='mt-2'>
                  <label className="text-xs text-black">
                    Description
                  </label>
                  <Input
                    onChange={(e) => { setDescription(e.target.value) }}
                    type="text"
                    placeholder="Description"
                  />
                </div>
                <div className="flex items-end mt-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-3 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-center p-4 rounded-tr-md rounded-br-md text-white font-bold bg-orange-900 h-full w-auto"> ADD </button>

    </>
  );
}
