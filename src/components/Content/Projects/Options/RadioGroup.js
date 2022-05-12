import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: 'Poker Game',

  },
  {
    name: 'Project 2',

  },
  {
    name: 'Project 3',

  },
  {
    name: 'Project 4',
  },
  {
    name: 'Project 5',
  }
]

export function Options({ onSelectedProjectChange }) {
  const [selected, setSelected] = useState("Poker Game")


  return (
    <div className="w-full px-4 py-16" >
      <div className="" >
        <RadioGroup value={selected} onChange={setSelected} onClick={onSelectedProjectChange}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-4">
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
                    relative flex cursor-pointer rounded-lg px-5 py-6 shadow-md focus:outline-none hover:opacity-100`
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
    </div>
  )
}
