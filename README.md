# Jalali Persian DatePicker

A customizable Jalali (Persian) date picker component for React and Next.js, allowing users to easily select dates in the Jalali calendar. This package leverages `jalaali-js` for Jalali date conversion and `@radix-ui/react-popover` for the date picker UI, while letting users install external dependencies themselves for flexibility.

> [!TIP]
> This package works best with Shadcn/ui if you installed that you don't need to install anything except jalaali-js and popover from Shadcn/ui

## Demo

![Demo Picture](https://utfs.io/f/RpLgr1McWOs4G1a9c6FcNq9dmBPilLg2x0p3TOu4FUfyEhCX)

## Features

- Jalali (Persian) calendar functionality.
- Designed for use with React and Next.js.
- Fully customizable and easy to integrate.
- External dependencies are lightweight and user-managed.
- Allows flexible usage with UI libraries like Radix and Shadcn/UI.

## Installation

To use this package, you’ll need to install both the `Jalali Persian DatePicker` and its peer dependencies.

### Step 1: Install the Package

```bash
npm install jalali-persian-datepicker jalaali-js
```

### Step 2: Install Peer Dependencies

```bash
npm install @radix-ui/react-popover lucide-react
```

## Usage

Here’s a basic example of how to use the Jalali Persian DatePicker component in a React or Next.js project:

## Example

```tsx
import React, { useState } from "react";
import { JalaliPersianDatePicker } from "jalali-persian-datepicker";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "shadcn/ui";

const MyComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <JalaliPersianDatePicker
        selected={selectedDate}
        onSelect={(date) => setSelectedDate(date)}
      />
    </div>
  );
};

export default MyComponent;
```

## Available Props

| Prop       | Type                          | Description                                                                      |
| ---------- | ----------------------------- | -------------------------------------------------------------------------------- |
| `selected` | `JalaaliDate` \| `undefined`  | The currently selected date in the Jalali calendar. Format: `{ jy, jm, jd }`     |
| `onSelect` | `(date: JalaaliDate) => void` | Callback triggered when a user selects a date. Returns the selected Jalali date. |

## Dependencies

This package relies on the following peer dependencies, which you must install:

- [`@radix-ui/react-popover`](https://www.radix-ui.com/docs/primitives/components/popover): For building the popover calendar UI.
- [`lucide-react`](https://lucide.dev/docs/lucide-react): For icons like arrows used for navigation.
- [`jalaali-js`](https://github.com/jalaali/jalaali-js): For Jalali date conversions.

## License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this software. See the [LICENSE](https://mit-license.org/) file for more details.
