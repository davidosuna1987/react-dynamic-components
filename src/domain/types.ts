import React from 'react'

// types
const SizesTypes = ['small', 'medium', 'large'] as const
export type SizesTypes = typeof SizesTypes[number]

const ButtonTypes = [
    'primary',
    'secondary',
    'tertiary',
    'danger',
    'success',
    'warning',
    'info',
    'light',
    'dark',
    'link',
    null,
] as const
export type ButtonTypes = typeof ButtonTypes[number]

const VariantColors = [
    'primary',
    'secondary',
    'tertiary',
    'danger',
    'success',
    'warning',
    'info',
    'light',
    'dark',
    null,
] as const
export type VariantColors = typeof VariantColors[number]

const VariantColorTypes = [
    'light',
    'dark',
    null,
] as const
export type VariantColorTypes = typeof VariantColorTypes[number]

const OptionsType = ['button', 'submit', 'reset'] as const
export type OptionsType = typeof OptionsType[number]

const IconPosition = ['left', 'right', 'none'] as const
export type IconPosition = typeof IconPosition[number]

export type SelectContent = {
    key: string
    value: string
}
const SwitcherTypes = [
    'primary',
    'secondary',
    'tertiary',
    'danger',
    'success',
    'warning',
    'info',
    'light',
    'dark',
    null,
] as const
export type SwitcherTypes = typeof SwitcherTypes[number]

// interface
export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    size: SizesTypes
    onClick: () => void
    variant: ButtonTypes
    withShadow?: boolean
    disabled?: boolean
    hover?: boolean
    option: OptionsType
    styles?: React.CSSProperties
    bgColor?: string
    textColor?: string
    text?: string
    faIcon?: string | null
    colorIcon?: string | null
    iconPosition?: IconPosition
    className?: string
    children?: React.ReactNode
}

export interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    placeholder?: string
    type?: string
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    styles?: React.CSSProperties
    className?: string
    children?: React.ReactNode
    id?: string
    withShadow?: boolean
    disabled?: boolean
    hover?: boolean
}

export interface IconProps {
    faIcon?: string
    fcIcon?: string
    color?: string
    size?: string
    styles?: React.CSSProperties
    className?: string
    children?: React.ReactNode
}

export interface SelectProps {
    selectContent: SelectContent[]
    className?: string
    styles?: React.CSSProperties
    selectPlaceHolder: string
    shouldHaveValue?: boolean
    setValue(value: string): void
    id?: string
}

export interface SwitcherProps {
    onClick: (value: boolean) => void
    checked: boolean
    size: SizesTypes
    variant: SwitcherTypes
    withShadow?: boolean
    disabled?: boolean
    styles?: React.CSSProperties
    bgColor?: string
    thumbColor?: string
    text?: string
    className?: string
    children?: React.ReactNode
}
