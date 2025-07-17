import { Card, CardContent } from "@/components/ui/card";

export default function TopProduct() {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="w-12 h-12 rounded-md bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <p className="text-sm mt-2">Kulit Pangsit</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-md bg-gray-300 text-gray-700 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <p className="text-sm mt-2">Mie</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-md bg-red-500 text-white flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <p className="text-sm mt-2">Kulit Dimsum</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
