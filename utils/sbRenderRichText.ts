export default function (richtext: RichtextSb): string {
  return renderRichText(richtext, {
    resolver: (component, blok) => {
      return `<component :blok='${JSON.stringify(
        blok
      )}' is="${component}" class="text-lg md:text-xl justify-center md:justify-start" />`;
    },
  })
}