import * as React from 'react';
import { Field } from '@strapi/design-system';

interface ColorPickerInputProps {
  disabled?: boolean;
  error?: string;
  hint?: React.ReactNode;
  intlLabel: { id: string; defaultMessage: string };
  labelAction?: React.ReactNode;
  name: string;
  onChange: (event: { target: { name: string; value: string; type?: string } }) => void;
  required?: boolean;
  value?: string;
}

const FALLBACK = '#000000';

// Native <input type="color"> opens the browser/OS color picker (swatches +
// full gradient + eyedropper on Chrome/Edge) — no numbers to type, no new
// dependency. This is the Input half of the `global::color` custom field
// registered in src/index.ts and src/admin/app.tsx.
const ColorPickerInput = React.forwardRef<HTMLInputElement, ColorPickerInputProps>(
  ({ disabled, error, hint, intlLabel, labelAction, name, onChange, required, value }, ref) => {
    const current = value || FALLBACK;

    return (
      <Field.Root name={name} id={name} error={error} hint={hint} required={required}>
        <Field.Label action={labelAction}>{intlLabel.defaultMessage}</Field.Label>
        <input
          ref={ref}
          type="color"
          id={name}
          name={name}
          disabled={disabled}
          value={current}
          onChange={(event) => onChange({ target: { name, value: event.target.value, type: 'string' } })}
          style={{
            display: 'block',
            width: '100%',
            height: '2.5rem',
            padding: '0.25rem',
            border: '1px solid #dcdce4',
            borderRadius: '4px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            background: '#fff',
          }}
        />
        <Field.Hint />
        <Field.Error />
      </Field.Root>
    );
  }
);

export default ColorPickerInput;
