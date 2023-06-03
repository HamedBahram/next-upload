import Dropzone from '@/components/Dropzone'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Upload Files</h1>
        <Dropzone className='mt-10 border border-neutral-200 p-16' />
      </div>
    </section>
  )
}
