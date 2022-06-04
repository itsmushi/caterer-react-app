import { atom } from 'recoil'

export const mechantName = atom({ key: 'mechantName', default: '' })
export const mechantAddress = atom({ key: 'mechantAddress', default: '' })
export const mechantCertificate = atom({
  key: 'mechantCertificate',
  default: '',
})
export const mechantBusinessLicense = atom({
  key: 'mechantBusinessLicense',
  default: '',
})
export const ownerIdCardNo = atom({ key: 'ownerIdCardNo', default: '' })
export const ownerName = atom({ key: 'ownerName', default: '' })
export const ownerEmail = atom({ key: 'ownerEmail', default: '' })
export const ownerPhoneInitial = atom({ key: 'ownerPhoneInitial', default: '' })
export const ownerPhoneMiddle = atom({ key: 'ownerPhoneMiddle', default: '' })
export const ownerPin = atom({ key: 'ownerPin', default: '' })
