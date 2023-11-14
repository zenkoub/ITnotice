export default function Container() {
  return (
    <>
      <div class="flex-grow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-400">
          <slot />
        </div>
      </div>
    </>
  )
}