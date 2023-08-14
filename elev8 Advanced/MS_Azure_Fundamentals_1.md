# Microsoft Azure Fundamentals

### 1. Introduction to Cloud Computing

Cloud Computing is the delivery of computing services over the internet. It offers faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping lower your operating costs, run your infrastructure more efficiently and scale as your business needs change.

---

### 2. Shared Responsibility Model

The Shared Responsibility Model is a security framework that dictates the security obligations of a cloud computing provider and its users to ensure accountability. The model is broken down into two main categories: security of the cloud and security in the cloud.

![Shared Responsibility Model](https://learn.microsoft.com/tr-tr/training/wwl-azure/describe-cloud-compute/media/shared-responsibility-b3829bfe.svg)

> Source: [Microsoft Learn](https://learn.microsoft.com/tr-tr/training/modules/describe-cloud-compute/4-describe-shared-responsibility-model)

- Cloud Provider Responsibilities

  - Physical Security
  - Network Security
  - Host Security
  - Application Security
  - Data Security

- Customer Responsibilities
  - Identity and Access Management
  - Application Security
  - Data Security
  - Operating System Security
  - Network Security
  - Physical Security

---

### 3. Cloud Computing Service Models

- `Private Cloud` is a cloud computing environment in which all hardware and software resources are dedicated exclusively to, and accessible only by, a single customer. Private cloud combines many of the benefits of cloud computing—including elasticity, scalability, and ease of service delivery—with the access control, security, and resource customization of on-premises infrastructure.

- `Public Cloud` is a cloud computing environment in which all hardware, software, and other supporting infrastructure is owned and managed by a cloud provider and made available to customers over the Internet. Microsoft Azure is an example of a public cloud.

- `Hybrid Cloud` is a cloud computing environment that uses a mix of on-premises, private cloud and third-party, public cloud services with orchestration between the two platforms. By allowing workloads to move between private and public clouds as computing needs and costs change, hybrid cloud gives businesses greater flexibility and more data deployment options.

- `Multi Cloud` is the use of multiple cloud computing and storage services in a single heterogeneous architecture. This also refers to the distribution of cloud assets, software, applications, etc. across several cloud-hosting environments.

`Azure Arc` is a set of technologies that extends Azure management and services to any infrastructure. Azure Arc enables you to run Azure services in any Kubernetes environment, including on-premises, multicloud, and edge environments. You can use Azure Arc to manage and govern serverless and Kubernetes apps across your environments, as well as Azure data services on any Kubernetes cluster.

`Azure VMware Solution` is a VMware validated solution that makes it easy to run VMware natively on Azure. You can run VMware Cloud Foundation, VMware vSphere, vSAN, NSX-T, and HCX in Azure. You can also take advantage of Azure services such as Azure Active Directory, Azure AI, and Azure Analytics.

#### 4. Consumption-based Model

The consumption-based model is a cloud computing pricing model in which the customer is only charged for the resources they use. This model is also known as pay-as-you-go.

CapEx is short for capital expenditure. OpEx is short for operating expenditure. CapEx is the money invested by a company in acquiring, maintaining, or improving fixed assets such as property, buildings, factories, equipment, and technology. OpEx is the money a company spends on an ongoing, day-to-day basis in order to run a business or system.

OpEx is the money a company spends on an ongoing, day-to-day basis in order to run a business or system. OpEx is short for operating expenditure. CapEx is short for capital expenditure. CapEx is the money invested by a company in acquiring, maintaining, or improving fixed assets such as property, buildings, factories, equipment, and technology.

---

`IaaS` is a cloud computing model in which a third-party provider hosts hardware, software, servers, storage, and other infrastructure components on behalf of its users. IaaS providers also host users’ applications and handle tasks including system maintenance, backup and resiliency planning.

`PaaS` is a cloud computing model in which a third-party provider delivers hardware and software tools — usually those needed for application development — to users over the internet. A PaaS provider hosts the hardware and software on its own infrastructure. As a result, PaaS frees users from having to install in-house hardware and software to develop or run a new application.

`SaaS` is a cloud computing model in which a third-party provider hosts applications and makes them available to users over the internet. SaaS is one of three main categories of cloud computing, alongside infrastructure as a service (IaaS) and platform as a service (PaaS).

---

### 5. Cloud Computing

- `High Availability` is a characteristic of a system, which aims to ensure an agreed level of operational performance, usually uptime, for a higher than normal period.

- `High Scalability` is the ability of a system, network, or process to handle a growing amount of work in a capable manner or its ability to be enlarged to accommodate that growth.

- `High Elasticity` is the degree to which a system is able to adapt to workload changes by provisioning and de-provisioning resources in an autonomic manner, such that at each point in time the available resources match the current demand as closely as possible.

- `High Agility` is the ability to rapidly and cost efficiently adapt to changes in demand.

- `Vertical Scaling` is the ability to increase the capacity of existing hardware or software by adding resources. In cloud computing, this means adding more storage space to a virtual machine or adding more virtual machines to a server.

- `Horizontal Scaling` is the ability to connect multiple hardware or software entities, such as servers, so that they work as a single logical unit. In cloud computing, this means adding more virtual machines to a server or connecting multiple servers so that they work together as one unit.

---

### 6. Microsoft Azure Well-Architected Framework

- Trustworthiness
- Cost Optimization
- Reliability
- Performance Efficiency
- Operational Excellence

---
