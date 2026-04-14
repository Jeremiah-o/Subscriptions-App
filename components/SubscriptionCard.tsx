import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from '@/lib/util'
import { clsx } from 'clsx'

const SubscriptionCard = ({name,price, currency, icon,billing,color, category, plan, renewalDate, expanded, onPress, paymentMethod, startDate, status}:SubscriptionCardProps) => {
  return (
    <Pressable className={clsx('sub-card',expanded ? 'sub-card-expanded':'bg-card')} style={!expanded && color?{backgroundColor:color}:undefined} onPress={onPress}>
      <View className='sub-head'>
        <View className='sub-main'>
            <Image source={icon} className='sub-icon' />
            <View className='sub-copy'>
                <Text className='sub-title' numberOfLines={1}>{name}</Text>
                <Text className='sub-meta' numberOfLines={1} ellipsizeMode='tail' >
                    {category ?. trim() || plan ?. trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate): "")}
                </Text>
            </View>
        </View>
        <View className='sub-price-box'>
            <Text className='sub-price'>{formatCurrency(price, currency)}</Text>
            <Text className='sub-billing'>{billing}</Text>
        </View>
      </View>
      {expanded && (
        <View className='sub-bdy'>
          <View className='sub-details'>
            <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Payment:</Text>
                <Text numberOfLines={1} className='sub-value' ellipsizeMode='tail'>{paymentMethod ?.trim()}</Text>
              </View>
            </View>
            <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Category:</Text>
                <Text numberOfLines={1} className='sub-value' ellipsizeMode='tail'>{category ?.trim() || plan ?.trim()}</Text>
              </View>
            </View>
            <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Started:</Text>
                <Text numberOfLines={1} className='sub-value' ellipsizeMode='tail'>{startDate ? formatSubscriptionDateTime(startDate): ""}</Text>
              </View>
            </View>
            <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Renewal date:</Text>
                <Text numberOfLines={1} className='sub-value' ellipsizeMode='tail'>{renewalDate ? formatSubscriptionDateTime(renewalDate): ""}</Text>
              </View>
            </View>
            <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Status:</Text>
                <Text numberOfLines={1} className='sub-value' ellipsizeMode='tail'>{status ? formatStatusLabel(status): ""}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  )
}

export default SubscriptionCard