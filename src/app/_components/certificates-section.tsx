import SectionHeader from "@/components/section-header";
import Stack from "@/components/Stack";

export default function CertificatesSection() {
  const certificateImages = [
    "/certificates/ideation-bootcamp.jpeg",
    "/certificates/convolve-hackathon.png",
  ];

  return (
    <section className="dk-safe-x-padding pt-[50px] lg:pt-[100px]">
      <SectionHeader
        title="Certificates"
        description="A showcase of my professional achievements and continuous learning."
        className="text-center"
      />
      <div className="mt-[50px] flex justify-center items-center">
        <div className="w-[320px] h-[240px] sm:w-[480px] sm:h-[360px] md:w-[640px] md:h-[480px]">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            cards={certificateImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Certificate ${i + 1}`}
                className="w-full h-full object-contain bg-white rounded-2xl"
              />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
