
import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";

interface ProductFormProps {
  productId: number | null; // null for new product, product ID for editing
  onClose: (wasUpdated: boolean) => void;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

const UNITS = [
  { value: "kg", label: "Kilogram" },
  { value: "g", label: "Gram" },
  { value: "t", label: "Tonne" },
  { value: "l", label: "Liter" },
  { value: "pc", label: "Piece" },
  { value: "box", label: "Box" },
  { value: "pkt", label: "Packet" },
];

const ProductForm = ({ productId, onClose }: ProductFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    quantity_available: "",
    unit: "kg",
    category: "",
    is_active: true,
    is_featured: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch categories
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await api.get('/products/categories/');
      return response.data;
    }
  });

  // Fetch product details if editing
  const { data: productData, isSuccess: productFetched } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      if (productId) {
        const response = await api.get(`/products/products/${productId}/`);
        return response.data;
      }
      return null;
    },
    enabled: !!productId,
  });

  // Set form data when editing existing product
  useEffect(() => {
    if (productData && productFetched) {
      setFormData({
        title: productData.title || "",
        description: productData.description || "",
        price: productData.price?.toString() || "",
        quantity_available: productData.quantity_available?.toString() || "",
        unit: productData.unit || "kg",
        category: productData.category?.toString() || "",
        is_active: productData.is_active ?? true,
        is_featured: productData.is_featured ?? false,
      });
    }
  }, [productData, productFetched]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSwitchChange = (id: string, checked: boolean) => {
    setFormData({
      ...formData,
      [id]: checked,
    });
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const productPayload = {
        ...formData,
        price: parseFloat(formData.price),
        quantity_available: parseInt(formData.quantity_available, 10),
        category: parseInt(formData.category, 10),
      };

      if (productId) {
        // Update existing product
        await api.put(`/products/products/${productId}/`, productPayload);
        toast({
          title: "Product updated",
          description: "Your product has been updated successfully.",
        });
      } else {
        // Create new product
        await api.post('/products/products/', productPayload);
        toast({
          title: "Product added",
          description: "Your product has been added successfully.",
        });
      }
      
      onClose(true);
    } catch (error: any) {
      console.error('Product submission error:', error);
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to save product. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={() => onClose(false)}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{productId ? "Edit Product" : "Add New Product"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Product Title</Label>
            <Input 
              id="title" 
              value={formData.title} 
              onChange={handleChange} 
              placeholder="Enter product title" 
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              value={formData.description} 
              onChange={handleChange} 
              placeholder="Enter product description" 
              required
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input 
                id="price" 
                type="number" 
                step="0.01" 
                value={formData.price} 
                onChange={handleChange} 
                placeholder="0.00" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="quantity_available">Quantity</Label>
              <Input 
                id="quantity_available" 
                type="number" 
                value={formData.quantity_available} 
                onChange={handleChange} 
                placeholder="0" 
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="unit">Unit</Label>
              <Select 
                value={formData.unit} 
                onValueChange={(value) => handleSelectChange("unit", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {UNITS.map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>
                      {unit.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category: Category) => (
                    <SelectItem key={category.id} value={category.id.toString()}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Switch 
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => handleSwitchChange("is_active", checked)}
              />
              <Label htmlFor="is_active">Active</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                id="is_featured"
                checked={formData.is_featured}
                onCheckedChange={(checked) => handleSwitchChange("is_featured", checked)}
              />
              <Label htmlFor="is_featured">Featured</Label>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onClose(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : productId ? "Update Product" : "Add Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
