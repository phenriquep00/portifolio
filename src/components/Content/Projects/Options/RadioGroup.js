import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'


const plans = [
  {
    name: 'NLW Return',
  },
  {
    name: 'Poker Game',
  },
  {
    name: 'Imersão Dados Alura',
  },
  {
    name: 'Hangman',
  },
  {
    name: 'Space Invaders',
  },
  {
    name: 'Pong',
  },
  {
    name: 'React Alura'
  },
  {
    name: 'Beat Machine'
  }
]

export function Options({ onSelectedProjectChange }) {
  const [selected, setSelected] = useState("NLW Return")


  return (
      <div className="w-[100%] px-4 py-2 max-h-[400px] inset-0 overflow-auto rounded-md scrollbar-thin scrollbar-thumb-gray-900 scrollbar-thumb-rounded ring-2 ring-gray-900 shadow-2xl " >
        <RadioGroup value={selected} onChange={setSelected} onClick={onSelectedProjectChange}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className=" w-full space-y-4">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan.name}
                className={({ active, checked }) =>
                  `${active
                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                    : ''
                  }
                  ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white opacity-70'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none hover:opacity-100`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm flex-1">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                              }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'
                              }`}
                          >
                          </RadioGroup.Description>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
  )
}
