import {usePropertyFormat} from "@/features/common/Hooks/usePropertyFormat";

const PropertyCard = (property) => {
    const {} = usePropertyFormat(property)
    return (
        <div>
            PropertyCard
        </div>
    )
}

export default PropertyCard;