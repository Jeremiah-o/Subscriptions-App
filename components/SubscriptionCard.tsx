import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { formatCurrency, formatSubscriptionDateTime } from '@/lib/util'
import { clsx } from 'clsx'

const SubscriptionCard = ({name,price, currency, icon,billing,color, category, plan, renewalDate, expanded,onPress}:SubscriptionCardProps) => {
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
    </Pressable>
  )
}

export default SubscriptionCard