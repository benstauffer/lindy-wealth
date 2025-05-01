import { PartnerCard } from "@/components/01/PartnerCard"

export default function PartnerExample() {
  return (
    <div className="min-h-screen bg-stone-800 py-20">
      <div className="max-w-sm mx-auto">
        <PartnerCard 
          title="Jonathan Jasper"
          role="Jonathan is a General Partner at July Fund."
          location="Jonathan is based in New York City, USA."
        />
      </div>
    </div>
  )
} 