import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, AlertTriangle } from "lucide-react";

export default function CrisisHelpButton() {
  const [showDialog, setShowDialog] = useState(false);

  const handleCallCrisis = () => {
    window.location.href = "tel:1800-599-0019";
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogTrigger asChild>
            <Button 
              className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full shadow-lg hover:bg-destructive/90 transition-colors flex items-center gap-2 text-sm font-medium crisis-pulse"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Crisis Help</span>
              <span className="sm:hidden">SOS</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="w-5 h-5" />
                Need Immediate Help?
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you're experiencing a mental health crisis, please reach out for immediate support.
              </p>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleCallCrisis}
                  className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call KIRAN: 1800-599-0019
                </Button>
                
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• 24/7 toll-free helpline</p>
                  <p>• Available in multiple languages</p>
                  <p>• Confidential support</p>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <p className="text-xs text-muted-foreground">
                  <strong>Other helplines:</strong><br />
                  Vandrevala Foundation: 9999 666 555<br />
                  AASRA: 91-22-27546669
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
