import React from 'react';
import { render, tests } from '@mantine/tests';
import userEvent from '@testing-library/user-event';
import { ColorPicker, ColorPickerProps, ColorPickerStylesNames } from './ColorPicker';

const defaultProps: ColorPickerProps = {
  format: 'rgba',
  swatches: ['#fff'],
};

describe('@mantine/core/ColorPicker', () => {
  tests.itSupportsSystemProps<ColorPickerProps, ColorPickerStylesNames>({
    component: ColorPicker,
    props: defaultProps,
    styleProps: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ColorPicker',
    stylesApiSelectors: [
      'wrapper',
      'preview',
      'body',
      'sliders',
      'swatches',
      'swatch',
      'saturation',
      'saturationOverlay',
      'slider',
      'thumb',
    ],
  });

  it('renders swatches based on swatches prop', () => {
    const { rerender, container } = render(<ColorPicker swatches={['#fff']} />);
    expect(container.querySelector('.mantine-ColorPicker-swatches')).toBeInTheDocument();

    rerender(<ColorPicker />);
    expect(container.querySelector('.mantine-ColorPicker-swatches')).not.toBeInTheDocument();
  });

  it('renders AlphaSlider based on format prop', () => {
    const { rerender, container } = render(<ColorPicker format="rgba" />);
    expect(container.querySelector('.mantine-ColorPicker-alpha')).toBeInTheDocument();

    rerender(<ColorPicker format="hex" />);
    expect(container.querySelector('.mantine-ColorPicker-alpha')).not.toBeInTheDocument();
  });

  it('renders picker based on withPicker prop', () => {
    const { rerender, container } = render(<ColorPicker withPicker />);
    expect(container.querySelector('.mantine-ColorPicker-picker')).toBeInTheDocument();

    rerender(<ColorPicker />);
    expect(container.querySelector('.mantine-ColorPicker-picker')).not.toBeInTheDocument();
  });

  it('calls onChangeEnd when swatch is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(
      <ColorPicker onChangeEnd={spy} format="hex" swatches={['#ffffff', '#000000']} />
    );
    await userEvent.click(container.querySelectorAll('.mantine-ColorSwatch-root')[0]);
    expect(spy).toHaveBeenCalledWith('#ffffff');
  });

  it('calls onColorSwatchClick when swatch is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(
      <ColorPicker onColorSwatchClick={spy} format="hex" swatches={['#ffffff', '#000000']} />
    );
    await userEvent.click(container.querySelectorAll('.mantine-ColorSwatch-root')[0]);
    expect(spy).toHaveBeenCalledWith('#ffffff');
  });
});
