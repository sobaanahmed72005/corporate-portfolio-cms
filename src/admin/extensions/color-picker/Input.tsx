import * as React from 'react';
import { Field } from '@strapi/design-system';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerInputProps {
  disabled?: boolean;
  error?: string;
  hint?: React.ReactNode;
  label?: string;
  name: string;
  onChange: (event: { target: { name: string; value: string; type?: string } }) => void;
  required?: boolean;
  value?: string;
}

const FALLBACK = '#000000';

// A curated palette of solid color blocks — click one and you're done, no
// dragging or typing required. "Custom color" below opens a full
// gradient + hue picker (react-colorful) for anything not in the grid.
const PRESET_COLORS = [
  '#000000', '#404040', '#737373', '#A3A3A3', '#E5E5E5', '#FFFFFF',
  '#EF4444', '#F97316', '#F59E0B', '#EAB308', '#84CC16', '#22C55E',
  '#10B981', '#14B8A6', '#06B6D4', '#0EA5E9', '#3B82F6', '#6366F1',
  '#8B5CF6', '#A855F7', '#D946EF', '#EC4899', '#F43F5E',
];

// At render time the content-manager passes a plain `label` string (from
// the field's configured/default label), not the `intlLabel` object used
// only at registration time for the content-type builder's field picker.
const ColorPickerInput = React.forwardRef<HTMLButtonElement, ColorPickerInputProps>(
  ({ disabled, error, hint, label, name, onChange, required, value }, ref) => {
    const current = value || FALLBACK;
    const [open, setOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!open) return;
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const setColor = (hex: string) => onChange({ target: { name, value: hex, type: 'string' } });

    return (
      <Field.Root name={name} id={name} error={error} hint={hint} required={required}>
        <Field.Label>{label}</Field.Label>
        <div ref={containerRef} style={{ position: 'relative' }}>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            onClick={() => setOpen((v) => !v)}
            aria-label={`${label ?? 'Color'}: ${current}`}
            style={{
              display: 'block',
              width: '4rem',
              height: '4rem',
              padding: 0,
              border: '2px solid #dcdce4',
              borderRadius: '8px',
              backgroundColor: current,
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
          />

          {open && (
            <div
              style={{
                position: 'absolute',
                zIndex: 20,
                top: 'calc(100% + 8px)',
                left: 0,
                width: '220px',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #dcdce4',
                background: '#181826',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '6px',
                  marginBottom: '12px',
                }}
              >
                {PRESET_COLORS.map((hex) => (
                  <button
                    key={hex}
                    type="button"
                    onClick={() => {
                      setColor(hex);
                      setOpen(false);
                    }}
                    aria-label={hex}
                    style={{
                      width: '100%',
                      aspectRatio: '1',
                      borderRadius: '4px',
                      border: hex.toLowerCase() === current.toLowerCase() ? '2px solid #4945ff' : '1px solid rgba(255,255,255,0.15)',
                      backgroundColor: hex,
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>

              <p style={{ margin: '0 0 8px', fontSize: '11px', fontWeight: 600, color: '#a5a5ba', textTransform: 'uppercase' }}>
                Custom color
              </p>
              <HexColorPicker color={current} onChange={setColor} style={{ width: '100%' }} />
            </div>
          )}
        </div>
        <Field.Hint />
        <Field.Error />
      </Field.Root>
    );
  }
);

export default ColorPickerInput;
