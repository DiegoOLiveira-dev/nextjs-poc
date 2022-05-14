// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //função para forçar o revalidate das chamadas
  res.unstable_revalidate('/')

  res.status(200).json({ name: 'John Doe' })
}
