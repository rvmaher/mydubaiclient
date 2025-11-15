# Project Structure

This document outlines the architecture and organization of the codebase following industry-standard practices.

## Directory Structure

```
src/
├── app/                      # Next.js app directory
│   ├── [lang]/              # Language-specific routes
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
│
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Divider/
│   │   ├── Heading/
│   │   ├── IconButton/
│   │   ├── Input/
│   │   ├── Link/
│   │   ├── Section/
│   │   ├── SocialButton/
│   │   └── index.ts         # Barrel export
│   │
│   ├── features/            # Feature-specific components
│   │   └── auth/            # Authentication features
│   │       ├── SignInForm.tsx
│   │       ├── SignUpForm.tsx
│   │       └── index.ts
│   │
│   ├── common/              # Common utilities
│   │   ├── ErrorBoundary/
│   │   └── Loading/
│   │
│   └── [other components]/  # Page-specific components
│
├── constants/               # Application constants
│   └── index.ts
│
├── types/                   # TypeScript type definitions
│   └── index.ts
│
├── hooks/                   # Custom React hooks
│   ├── useMediaQuery.ts
│   └── index.ts
│
├── utils/                   # Utility functions
│   ├── cn.ts               # Class name utility
│   └── auth.ts             # Authentication utilities
│
└── dictionaries/           # i18n translations
    ├── en.json
    ├── ar.json
    └── nl.json
```

## Design Principles

### 1. Component Organization

#### UI Components (`components/ui/`)
- **Purpose**: Reusable, atomic UI components
- **Characteristics**:
  - No business logic
  - Highly customizable via props
  - Styled with Tailwind CSS
  - TypeScript interfaces for props
- **Examples**: Button, Card, Input, Link

#### Feature Components (`components/features/`)
- **Purpose**: Feature-specific, composed components
- **Characteristics**:
  - Contains business logic
  - Uses UI components
  - Organized by feature domain
- **Examples**: SignInForm, SignUpForm

#### Common Components (`components/common/`)
- **Purpose**: Shared utilities and wrappers
- **Characteristics**:
  - Error boundaries
  - Loading states
  - Layout wrappers
- **Examples**: ErrorBoundary, Spinner, PageLoader

### 2. Code Quality Standards

#### TypeScript
- ✅ Strict type checking enabled
- ✅ Interfaces defined in `/types`
- ✅ No implicit `any` types
- ✅ Proper return types for functions

#### Component Best Practices
```typescript
// ✅ Good: Proper typing and props destructuring
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

// ❌ Bad: No types, inline styles
export default function Button(props) {
  return <button style={{ color: "red" }}>{props.children}</button>;
}
```

#### File Naming
- **Components**: PascalCase (`Button.tsx`, `SignInForm.tsx`)
- **Utilities**: camelCase (`cn.ts`, `auth.ts`)
- **Types**: camelCase with descriptive names (`index.ts`)
- **Hooks**: camelCase with `use` prefix (`useMediaQuery.ts`)

### 3. Import Organization

```typescript
// 1. External imports
import { useState } from "react";
import Image from "next/image";

// 2. Internal components
import { Button, Card } from "@/components/ui";

// 3. Types
import type { User } from "@/types";

// 4. Constants
import { APP_NAME } from "@/constants";

// 5. Utilities
import { cn } from "@/utils/cn";
```

### 4. State Management

- **Local State**: `useState` for component-specific state
- **Shared State**: Context API (e.g., `LanguageContext`)
- **Server State**: Consider React Query/SWR for future API calls

### 5. Styling Strategy

#### Tailwind CSS with cn() Utility
```typescript
import { cn } from "@/utils/cn";

// ✅ Good: Using cn() for conditional classes
<button className={cn(
  "px-4 py-2 rounded",
  variant === "primary" && "bg-black text-white",
  variant === "secondary" && "bg-white text-black border"
)} />

// ❌ Bad: Template literals without cn()
<button className={`px-4 py-2 ${variant === "primary" ? "bg-black" : "bg-white"}`} />
```

### 6. Accessibility (a11y)

- ✅ All buttons have `type` attribute
- ✅ All interactive elements have proper ARIA labels
- ✅ SVGs include `<title>` elements
- ✅ Semantic HTML elements used where appropriate
- ✅ Keyboard navigation support

### 7. Performance Optimization

- ✅ `useCallback` for event handlers in components
- ✅ Image optimization with Next.js `Image` component
- ✅ Code splitting via dynamic imports (when needed)
- ✅ Memoization with `React.memo` (when appropriate)

### 8. Error Handling

```typescript
// Wrap main app sections with ErrorBoundary
<ErrorBoundary fallback={<CustomError />}>
  <YourComponent />
</ErrorBoundary>
```

### 9. Constants Usage

```typescript
// ✅ Good: Constants defined once
import { NAVIGATION_ITEMS, Z_INDEX } from "@/constants";

// ❌ Bad: Magic numbers/strings
const header = { zIndex: 50 };
```

### 10. Testing Strategy (Future)

```
components/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx    # Unit tests
│   └── index.ts
```

## Migration Guide

### Before (Old Structure)
```typescript
// SignInForm.tsx
const SocialButton = ({ icon, label }) => (
  <button className="w-full...">
    <Icon /> {label}
  </button>
);
```

### After (New Structure)
```typescript
// components/ui/SocialButton/SocialButton.tsx
export default function SocialButton({ icon, label }: SocialButtonProps) {
  return <button className={cn("w-full...")}>{label}</button>;
}

// components/features/auth/SignInForm.tsx
import { SocialButton } from "@/components/ui";

export default function SignInForm() {
  return <SocialButton icon={FaGoogle} label="Continue with Google" />;
}
```

## Benefits

1. **Maintainability**: Clear separation of concerns
2. **Reusability**: Shared components reduce code duplication
3. **Scalability**: Easy to add new features
4. **Type Safety**: TypeScript catches errors early
5. **Testability**: Isolated components are easier to test
6. **Developer Experience**: Consistent patterns, easier onboarding
7. **Performance**: Optimized components and proper memoization
8. **Accessibility**: Built-in a11y best practices

## Next Steps

1. ✅ Set up common UI components
2. ✅ Refactor existing components
3. ✅ Add TypeScript types
4. ✅ Implement error boundaries
5. ⏳ Add comprehensive testing
6. ⏳ Set up Storybook for component documentation
7. ⏳ Implement API layer with proper error handling
8. ⏳ Add performance monitoring
