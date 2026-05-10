import { requireAuth } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

const sampleSuppliers = [
  { id: "1", name: "BioCell Technologies", category: "Stem Cell Products", location: "Dubai, UAE", website: "biocelltech.com" },
  { id: "2", name: "RegenLab SA", category: "PRP Kits", location: "Geneva, Switzerland", website: "regenlab.com" },
  { id: "3", name: "Exosome Diagnostics", category: "Exosome Products", location: "Boston, USA", website: "exosomedx.com" },
  { id: "4", name: "MedEquip Gulf", category: "Medical Equipment", location: "Abu Dhabi, UAE", website: "medequipgulf.com" },
];

export default async function SuppliersPage() {
  await requireAuth();

  return (
    <div>
      <PageHeader
        title="Vetted Suppliers"
        description="Browse RMF-approved suppliers for regenerative medicine products and equipment."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleSuppliers.map((supplier) => (
          <Card key={supplier.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-rmf-gold/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-6 w-6 text-rmf-gold" />
                </div>
                <div>
                  <h3 className="font-semibold">{supplier.name}</h3>
                  <p className="text-sm text-rmf-gold">{supplier.category}</p>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {supplier.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-3 w-3" /> {supplier.website}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
