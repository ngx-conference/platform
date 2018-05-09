export interface FormButton {
  label?: string
  icon?: string
  classNames?: string
  outline?: boolean
  color?: FormButtonColor
  event?: string
  payload?: string
}

export type FormButtonColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-info'
  | 'outline-success'
  | 'outline-warning'
  | 'outline-danger'
  | 'outline-dark'
  | 'outline-light'

export class Button {
  public static button(label: string, config?: FormButton) {
    return Object.assign({}, { label }, config)
  }

  public static save(config?: FormButton) {
    const btn = {
      label: 'Save',
      color: 'success',
      event: 'SAVE',
    }
    return Object.assign({}, btn, config)
  }

  public static saveClose(config?: FormButton) {
    const btn = {
      label: 'Save and Close',
      color: 'success',
      outline: true,
      event: 'SAVE_CLOSE',
    }
    return Object.assign({}, btn, config)
  }

  public static close(config?: FormButton) {
    const btn = {
      color: 'secondary',
      label: 'Close',
      event: 'CLOSE',
      outline: true,
    }
    return Object.assign({}, btn, config)
  }

  public static cancel(config?: FormButton) {
    const btn = {
      color: 'secondary',
      label: 'Cancel',
      event: 'CANCEL',
      outline: true,
    }
    return Object.assign({}, btn, config)
  }
}

export class ButtonGroup {
  public static saveAndClose(config?: FormButton) {
    return [Button.save(config), Button.saveClose(config), Button.close(config)]
  }

  public static saveClose(config?: FormButton) {
    return [Button.save(config), Button.close(config)]
  }

  public static saveAndCancel(config?: FormButton) {
    return [Button.save(config), Button.saveClose(config), Button.cancel(config)]
  }

  public static saveCancel(config?: FormButton) {
    return [Button.save(config), Button.cancel(config)]
  }
}
