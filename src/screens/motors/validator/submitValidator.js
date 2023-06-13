export const isSubmitValid = (formState) => {
  try {
    if (!formState.name.match(/^[a-zA-Z0-9\s ]+$/g)) {
      throw Error('Name should be string')
    }

    if (!formState.price.match(/^[0-9]+$/g)) {
      throw Error('Price should be numeric')
    }

    if (!formState.production.match(/^[a-zA-Z0-9\s ]+$/g)) {
      throw Error('production should be string')
    }

    if (!formState.image) {
      throw Error('Image should be chose')
    }

    return true
  } catch (error) {
    return error
  }
}