import Image from "next/image";

export default function FeaturedNews() {
  return (
    <div className="relative">
      <Image
        src="/images/featured.jpg"
        alt="Featured News"
        width={1200}
        height={600}
        className="rounded-lg object-cover w-full"
      />
      <div className="absolute inset-0 bg-black/40 rounded-lg flex items-end p-6">
        <h2 className="text-3xl font-bold text-white">
          Breaking: Global Markets Show Signs of Recovery
        </h2>
      </div>
    </div>
  );
}
