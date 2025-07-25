export function handleFormatRealValue(value) {
  try {
      return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
      })
  } catch (error) {
      return 'R$ 0,00'
  }
}