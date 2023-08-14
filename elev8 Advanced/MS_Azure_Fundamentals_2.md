# Microsoft Azure Fundamentals

### What is Azure?

Azure is a cloud computing platform and infrastructure created by Microsoft for building, deploying, and managing applications and services through a global network of Microsoft-managed data centers. It provides both PaaS and IaaS services and supports many different programming languages, tools and frameworks, including both Microsoft-specific and third-party software and systems.

### Azure Powershell CLI

`Get-Date` use for get current date and time

```powershell
Get-Date
```

`az version` use for get current version of Azure CLI

```powershell
az version
```

`az update` use for update Azure CLI

```powershell
az update
```

`az interactive` use for interactive mode and interactive mode is a command-line experience that enables you to type commands to manage Azure resources. It provides auto-completion, inline help, and examples. It also records your command history, so you can easily repeat commands. Interactive mode is a great way to explore Azure CLI without having to learn all of the commands.

```powershell
az interactive
```

### Linux VM and Install Nginx

```powershell
az vm create \
  --resource-group learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3 \
  --name my-vm \
  --public-ip-sku Standard \
  --image Ubuntu2204 \
  --admin-username azureuser \
  --generate-ssh-keys
```

This command creates a VM named my-vm in the resource group named learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3. The VM uses the Ubuntu 22.04 image and generates SSH public and private key files. The public key is placed on the VM and the private key is downloaded to your local machine. The VM is also assigned a public IP address.

```powershell
az vm extension set \
  --resource-group learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3 \
  --vm-name my-vm \
  --name customScript \
  --publisher Microsoft.Azure.Extensions \
  --version 2.1 \
  --settings '{"fileUris":["https://raw.githubusercontent.com/MicrosoftDocs/mslearn-welcome-to-azure/master/configure-nginx.sh"]}' \
  --protected-settings '{"commandToExecute": "./configure-nginx.sh"}'
```

This command installs the Nginx web server on the VM. It uses the customScript extension to download and run a script named configure-nginx.sh. The script installs Nginx and starts the Nginx service.

---

### Network Access Configuration

```powershell
az vm list
```

This command lists all VMs in the current subscription. The output includes the public IP address of each VM.

---

```powershell
IPADDRESS="$(az vm list-ip-addresses \
  --resource-group learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3 \
  --name my-vm \
  --query "[].virtualMachine.network.publicIpAddresses[*].ipAddress" \
  --output tsv)"
```

This command uses the az vm list-ip-addresses command to get the public IP address of the VM named my-vm. The output is stored in a variable named IPADDRESS.

---

```powershell
curl --connect-timeout 5 http://$IPADDRESS
```

This command uses the curl command to send an HTTP request to the VM. The request is sent to the public IP address of the VM. The output shows the HTML for the default Nginx web page.

---

```powershell
curl: (28) Connection timed out after 5001 milliseconds
```

This error indicates that the request timed out. The request was sent to the public IP address of the VM, but the VM is not configured to allow inbound traffic on port 80.

---

```powershell
echo $IPADDRESS
```

This command displays the value of the IPADDRESS variable. The output shows the public IP address of the VM.

---

```powershell
az network nsg list \
  --resource-group learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3 \
  --query '[].name' \
  --output tsv
```

This command lists all network security groups (NSGs) in the resource group named learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3. The output shows the name of the NSG that is associated with the VM. Output: `my-vmNSG`

---

```powershell
az network nsg rule list \
  --resource-group learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3 \
  --nsg-name my-vmNSG
```

This command lists all rules in the NSG named my-vmNSG. The output shows that the NSG has a rule named default-allow-ssh that allows inbound traffic on port 22.

---

```powershell
az network nsg rule list \
  --resource-group learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3 \
  --nsg-name my-vmNSG \
  --query '[].{Name:name, Priority:priority, Port:destinationPortRange, Access:access}' \
  --output table
```

This command lists all rules in the NSG named my-vmNSG. The output shows the name, priority, port, and access for each rule.
Output:

```powershell
Name              Priority    Port    Access
-----------------  ----------  ------  --------
default-allow-ssh  1000        22      Allow
```

default-allow-ssh is the only rule in the NSG. It allows inbound traffic on port 22.

---

```powershell
az network nsg rule create \
  --resource-group learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3 \
  --nsg-name my-vmNSG \
  --name allow-http \
  --protocol tcp \
  --priority 100 \
  --destination-port-range 80 \
  --access Allow
```

This command creates a rule named allow-http in the NSG named my-vmNSG. The rule allows inbound traffic on port 80.

---

```powershell
az network nsg rule list \
  --resource-group learn-d46836c6-1a9d-40ac-bc1f-7142acf0cfc3 \
  --nsg-name my-vmNSG \
  --query '[].{Name:name, Priority:priority, Port:destinationPortRange, Access:access}' \
  --output table
```

This command lists all rules in the NSG named my-vmNSG. The output shows the name, priority, port, and access for each rule.
Output:

```powershell
Name              Priority    Port    Access
-----------------  ----------  ------  --------
default-allow-ssh  1000        22      Allow
allow-http        100        80      Allow
```

### Create Storage Blob

Blob use for store unstructured data such as text, binary data, documents or media files. Blobs are stored in containers. Containers are similar to folders, and you can set access permissions for containers or individual blobs.
