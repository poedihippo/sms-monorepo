import useApi from "hooks/useApi"
import useMutation from "hooks/useMutation"

import { Address } from "types/Address"

import { queryClient } from "../../../query"
import defaultMutationErrorHandler from "../../errors/defaultMutationError"

type EditAddressMutationData = {
  id: Address["id"]
  addressLine1: Address["addressLine1"]
  addressLine2: Address["addressLine2"]
  addressLine3: Address["addressLine3"]
  postcode: Address["postcode"]
  city: Address["city"]
  country: Address["country"]
  province: Address["province"]
  phone: Address["phone"]
  type: Address["type"]
  customerId: Address["customerId"]
}

export default () => {
  const api = useApi()

  const mutationData = useMutation<any, EditAddressMutationData>(
    ({
      id,
      addressLine1,
      addressLine2,
      addressLine3,
      postcode,
      city,
      country,
      province,
      phone,
      type,
      customerId,
    }: EditAddressMutationData) => {
      return api.addressUpdate({
        address: id.toString(),
        data: {
          address_line_1: addressLine1,
          address_line_2: addressLine2,
          address_line_3: addressLine3,
          postcode,
          city,
          country,
          province,
          phone,
          type,
          customer_id: customerId,
        },
      })
    },
    {
      chainSettle: (x, passedVariables) =>
        x
          .then(() => {
            toast("Detail address berhasil dirubah")

            queryClient.invalidateQueries("addressList")
            queryClient.invalidateQueries(["address", passedVariables.id])
          })
          .catch(defaultMutationErrorHandler({})),
    },
  )

  return mutationData
}
