import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { Div, Icon, ScrollDiv, Text } from "react-native-magnus"
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen"

import NotFound from "components/CommonList/NotFound"
import Loading from "components/Loading"

import { formatCurrency } from "helper"

const AllScreen = ({ reportData, filter }: any) => {
  const navigation = useNavigation()
  const windowHeight = Dimensions.get("screen").height
  const isLoading = false
  const renderLeads = ({ item }) => (
    <>
      <Div
        flex={1}
        py={14}
        bg="rgba(137, 189, 255, 0.7)"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalLeadsScreen", {
                id: item.id,
                startDate: filter?.filterUserId,
                endDate: filter?.filterCustomerHasActivity,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item?.total_leads ? item?.total_leads : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalNoOfLeads", {
                id: item.id,
                type: "bum",
                startDate: filter?.filterUserId,
                endDate: filter?.filterCustomerHasActivity,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item?.deal_leads ? item?.deal_leads : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            fontWeight="normal"
            textAlign="center"
            allowFontScaling={false}
            fontSize={8}
          >
            {!!formatCurrency(item?.invoice_price)
              ? formatCurrency(item?.invoice_price)
              : "0"}
          </Text>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            fontWeight="normal"
            textAlign="center"
            allowFontScaling={false}
            fontSize={8}
          >
            {!!formatCurrency(item?.amount_paid)
              ? formatCurrency(item?.amount_paid)
              : "0"}
          </Text>
        </Div>
      </Div>
      <FlatList
        data={item?.channels}
        renderItem={renderLeadsChannel}
        keyExtractor={(_, idx: number) => idx.toString()}
      />
    </>
  )

  const renderLeadsChannel = ({ item }) => (
    <>
      <Div h={heightPercentageToDP(2)} bg="rgba(23,148,157, 0.5)" />
      <Div
        flex={1}
        py={14}
        bg="rgba(137, 189, 255, 0.3)"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalLeadsScreen", {
                // id: item.id,
                startDate: filter?.filterUserId,
                endDate: filter?.filterCustomerHasActivity,
                channel_id: item.id,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item?.total_leads ? item?.total_leads : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalNoOfLeads", {
                // id: item.id,
                startDate: filter?.filterUserId,
                endDate: filter?.filterCustomerHasActivity,
                channel_id: item?.id,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item?.deal_leads ? item?.deal_leads : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            fontWeight="normal"
            textAlign="center"
            allowFontScaling={false}
            fontSize={8}
          >
            {!!formatCurrency(item?.invoice_price)
              ? formatCurrency(item?.invoice_price)
              : "0"}
          </Text>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            fontWeight="normal"
            textAlign="center"
            allowFontScaling={false}
            fontSize={8}
          >
            {!!formatCurrency(item?.amount_paid)
              ? formatCurrency(item?.amount_paid)
              : "0"}
          </Text>
        </Div>
      </Div>
      <FlatList
        data={item?.sales}
        // style={{height: heightPercentageToDP(100)}}
        renderItem={renderLeadsSales}
        keyExtractor={(_, idx: number) => idx.toString()}
      />
    </>
  )

  const renderLeadsSales = ({ item }) => (
    <>
      <Div
        // flex={1}
        py={14}
        bg="white"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalLeadsScreen", {
                // id: item.id,
                startDate: filter?.filterUserId,
                endDate: filter?.filterCustomerHasActivity,
                // channel_id: item.id,
                user_id: item.id,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item?.total_leads ? item?.total_leads : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalNoOfLeads", {
                // id: item.id,
                startDate: filter?.filterUserId,
                endDate: filter?.filterCustomerHasActivity,
                // channel_id: item.channel_id,
                user_id: item.id,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item?.deal_leads ? item?.deal_leads : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            fontWeight="normal"
            textAlign="center"
            allowFontScaling={false}
            fontSize={8}
          >
            {!!formatCurrency(item?.invoice_price)
              ? formatCurrency(item?.invoice_price)
              : "0"}
          </Text>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            fontWeight="normal"
            textAlign="center"
            allowFontScaling={false}
            fontSize={8}
          >
            {!!formatCurrency(item?.amount_paid)
              ? formatCurrency(item?.amount_paid)
              : "0"}
          </Text>
        </Div>
      </Div>
    </>
  )

  const renderHot = ({ item }) => (
    <>
      <Div
        py={14}
        bg="rgba(137, 189, 255, 0.7)"
        row
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalHotScreen", {
                id: item.id,
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.hot_activity ? item.hot_activity : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalEstimated", {
                id: item.id,
                filter,
              })
            }
          >
            <Text
              fontWeight="normal"
              textAlign="center"
              allowFontScaling={false}
              fontSize={8}
            >
              {!!formatCurrency(item?.estimated_value)
                ? formatCurrency(item?.estimated_value)
                : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={2} justifyContent="center">
          <Text
            fontWeight="normal"
            textAlign="center"
            allowFontScaling={false}
            fontSize={8}
          >
            {!!formatCurrency(item.quotation)
              ? formatCurrency(item.quotation)
              : "0"}
          </Text>
        </Div>
      </Div>
      <FlatList
        data={item?.channels}
        renderItem={renderHotChannel}
        keyExtractor={(_, idx: number) => idx.toString()}
      />
    </>
  )

  const renderHotChannel = ({ item }) => (
    <>
      <Div h={heightPercentageToDP(2)} bg="rgba(23,148,157, 0.5)" />
      <Div
        py={14}
        bg="rgba(137, 189, 255, 0.3)"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalHotScreen", {
                // id: item.id,
                filter,
                channel_id: item.id,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.hot_activity ? item.hot_activity : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalEstimated", {
                // id: item.id,
                filter,
                channel_id: item.id,
              })
            }
          >
            <Text
              fontWeight="normal"
              textAlign="center"
              allowFontScaling={false}
              fontSize={8}
            >
              {!!formatCurrency(item.estimated_value)
                ? formatCurrency(item.estimated_value)
                : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={2} justifyContent="center">
          <Text
            fontWeight="normal"
            textAlign="center"
            allowFontScaling={false}
            fontSize={8}
          >
            {!!formatCurrency(item.quotation)
              ? formatCurrency(item.quotation)
              : "0"}
          </Text>
        </Div>
      </Div>
      <FlatList
        data={item?.sales}
        renderItem={renderHotSales}
        keyExtractor={(_, idx: number) => idx.toString()}
      />
    </>
  )

  const renderHotSales = ({ item }) => (
    <>
      <Div
        py={14}
        bg="white"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalHotScreen", {
                // id: item.id,
                filter,
                // channel_id: item.id,
                user_id: item.id,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.hot_activity ? item.hot_activity : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={2} justifyContent="center">
          <Pressable
            onPress={() =>
              navigation.navigate("TotalEstimated", {
                // id: item.id,
                filter,
                // channel_id: item.id,
                user_id: item.id,
              })
            }
          >
            <Text
              fontWeight="normal"
              textAlign="center"
              allowFontScaling={false}
              fontSize={8}
            >
              {!!formatCurrency(item.estimated_value)
                ? formatCurrency(item.estimated_value)
                : "0"}
            </Text>
          </Pressable>
        </Div>
        <Div flex={2} justifyContent="center">
          <Text
            fontWeight="normal"
            textAlign="center"
            allowFontScaling={false}
            fontSize={8}
          >
            {!!formatCurrency(item.quotation)
              ? formatCurrency(item.quotation)
              : "0"}
          </Text>
        </Div>
      </Div>
    </>
  )

  const renderStatus = ({ item }) => (
    <>
      <Div
        py={14}
        bg="rgba(137, 189, 255, 0.7)"
        row
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        h={heightPercentageToDP(10)}
        justifyContent="center"
      >
        <Div flex={2} justifyContent="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StatusPipeline", {
                id: item.id,
                status: "CLOSED",
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.drop_leads ? item.drop_leads : "0"}
            </Text>
          </TouchableOpacity>
        </Div>
        <Div flex={2} justifyContent="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StatusPipeline", {
                id: item.id,
                status: "COLD",
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.cold_activity ? item.cold_activity : "0"}
            </Text>
          </TouchableOpacity>
        </Div>
        <Div flex={2} justifyContent="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StatusPipeline", {
                id: item.id,
                status: "WARM",
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.warm_activity ? item.warm_activity : "0"}
            </Text>
          </TouchableOpacity>
        </Div>
      </Div>
      <FlatList
        data={item?.channels}
        renderItem={renderStatusChannel}
        bounces={false}
      />
    </>
  )

  const renderStatusChannel = ({ item }) => (
    <>
      <Div h={heightPercentageToDP(2)} bg="rgba(23,148,157, 0.5)" />
      <Div
        py={14}
        bg="rgba(137, 189, 255, 0.3)"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Div flex={2} justifyContent="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StatusPipeline", {
                // id: item.id,
                status: "CLOSED",
                channel_id: item.id,
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.drop_leads ? item.drop_leads : "0"}
            </Text>
          </TouchableOpacity>
        </Div>
        <Div flex={2} justifyContent="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StatusPipeline", {
                // id: item.id,
                status: "COLD",
                channel_id: item.id,
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.cold_activity ? item.cold_activity : "0"}
            </Text>
          </TouchableOpacity>
        </Div>
        <Div flex={2} justifyContent="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StatusPipeline", {
                // id: item.id,
                status: "WARM",
                channel_id: item.id,
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              color="#21B5C1"
              textAlign="center"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.warm_activity ? item.warm_activity : "0"}
            </Text>
          </TouchableOpacity>
        </Div>
      </Div>
      <FlatList
        data={item?.sales}
        renderItem={renderStatusSales}
        keyExtractor={(_, idx: number) => idx.toString()}
      />
    </>
  )

  const renderStatusSales = ({ item }) => (
    <>
      <Div
        py={14}
        bg="white"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Div flex={2} justifyContent="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StatusPipeline", {
                // id: item.id,
                status: "CLOSED",
                // channel_id: item.id,
                user_id: item.id,
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.drop_leads ? item.drop_leads : "0"}
            </Text>
          </TouchableOpacity>
        </Div>
        <Div flex={2} justifyContent="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StatusPipeline", {
                // id: item.id,
                status: "COLD",
                // channel_id: item.id,
                user_id: item.id,
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.cold_activity ? item.cold_activity : "0"}
            </Text>
          </TouchableOpacity>
        </Div>
        <Div flex={2} justifyContent="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StatusPipeline", {
                // id: item.id,
                status: "WARM",
                // channel_id: item.id,
                user_id: item.id,
                filter,
              })
            }
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              color="#21B5C1"
              fontSize={8}
              allowFontScaling={false}
            >
              {!!item.warm_activity ? item.warm_activity : "0"}
            </Text>
          </TouchableOpacity>
        </Div>
      </Div>
    </>
  )

  const renderSingle = ({ item }) => (
    <>
      {/* <Div h={heightPercentageToDP(2)} bg="#c4c4c4"/> */}
      <Div
        py={14}
        bg="rgba(137, 189, 255, 0.7)"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Pressable
          onPress={() =>
            navigation.navigate("SingleList", {
              id: item.id,
              startDate: filter?.filterUserId,
              endDate: filter?.filterCustomerHasActivity,
              // channel_id: item.channel_id,
              // user_id: item.id,
            })
          }
        >
          <Div flex={3} justifyContent="center">
            <Text
              fontWeight="normal"
              textAlign="center"
              allowFontScaling={false}
              numberOfLines={2}
            >
              {item?.name}
            </Text>
          </Div>
        </Pressable>
      </Div>

      <FlatList
        bounces={false}
        data={item?.channels}
        renderItem={renderSingleChannel}
        keyExtractor={(_, idx: number) => idx.toString()}
      />
    </>
  )

  const renderSingleChannel = ({ item }) => (
    <>
      <Div h={heightPercentageToDP(2)} bg="rgba(23,148,157, 0.5)" />
      <Div
        py={14}
        bg="rgba(137, 189, 255, 0.3)"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Pressable
          onPress={() =>
            navigation.navigate("SingleChannelList", {
              // id: item.id,
              startDate: filter?.filterUserId,
              endDate: filter?.filterCustomerHasActivity,
              channel_id: item.channel_id,
              // user_id: item.id,
            })
          }
        >
          <Div flex={3} justifyContent="center">
            <Text
              fontWeight="normal"
              textAlign="center"
              allowFontScaling={false}
              numberOfLines={2}
            >
              {item?.name}
            </Text>
          </Div>
        </Pressable>
      </Div>
      <FlatList
        data={item?.sales}
        // style={{height: heightPercentageToDP(100)}}
        bounces={false}
        renderItem={renderSingleSales}
        keyExtractor={(_, idx: number) => idx.toString()}
      />
    </>
  )

  const renderSingleSales = ({ item }) => (
    <>
      <Div
        py={14}
        bg="white"
        row
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="#c4c4c4"
        rounded={0}
        justifyContent="center"
        h={heightPercentageToDP(10)}
      >
        <Pressable
          onPress={() =>
            navigation.navigate("TotalLeadsScreen", {
              // id: item.id,
              startDate: filter?.filterUserId,
              endDate: filter?.filterCustomerHasActivity,
              // channel_id: item.channel_id,
              user_id: item.id,
            })
          }
        >
          <Div flex={3} justifyContent="center">
            <Text
              fontWeight="normal"
              textAlign="center"
              allowFontScaling={false}
              numberOfLines={2}
            >
              {item?.name}
            </Text>
          </Div>
        </Pressable>
      </Div>
    </>
  )

  const header = (title: string, title1: string, title2: string) => {
    return (
      <Div
        py={20}
        row
        bg="#20B5C0"
        style={{ height: heightPercentageToDP(9.5) }}
        justifyContent="center"
      >
        <Div flex={3} justifyContent="center">
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize={10}
            allowFontScaling={false}
          >
            {title}
          </Text>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize={10}
            allowFontScaling={false}
          >
            {title1}
          </Text>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize={10}
            allowFontScaling={false}
          >
            {title2}
          </Text>
        </Div>
      </Div>
    )
  }

  const headers = (
    title: string,
    title1: string,
    title2: string,
    title3: string,
  ) => {
    return (
      <Div
        py={20}
        row
        bg="#20B5C0"
        justifyContent="center"
        style={{ height: heightPercentageToDP(9.5) }}
      >
        <Div flex={2} justifyContent="center">
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize={10}
            allowFontScaling={false}
          >
            {title}
          </Text>
        </Div>
        <Div flex={2} justifyContent="center">
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize={10}
            allowFontScaling={false}
          >
            {title1}
          </Text>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize={10}
            allowFontScaling={false}
          >
            {title2}
          </Text>
        </Div>
        <Div flex={3} justifyContent="center">
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize={10}
            allowFontScaling={false}
          >
            {title3}
          </Text>
        </Div>
      </Div>
    )
  }

  const SingleHeader = (title: string, title1: string, title2: string) => {
    return (
      <Div>
        <Div
          //   mt={39}
          py={18}
          row
          bg="#17949D"
          opacity={50}
          style={{ height: heightPercentageToDP(12.5) }}
        >
          <Div flex={3} justifyContent="center">
            <Text
              fontSize={18}
              color="white"
              fontWeight="bold"
              textAlign="center"
            >
              Name
            </Text>
          </Div>
        </Div>
      </Div>
    )
  }

  if (isLoading) {
    return <Loading />
  }
  return (
    <ScrollView
      bounces={false}
      style={{ flex: 1, backgroundColor: "#fff", height: windowHeight }}
    >
      <Div row>
        <Div>
          <FlatList
            bounces={false}
            style={{ width: widthPercentageToDP(30) }}
            data={reportData}
            renderItem={renderSingle}
            keyExtractor={(_, idx: number) => idx.toString()}
            ListHeaderComponent={SingleHeader}
          />
        </Div>

        <ScrollView
          style={{ backgroundColor: "#fff", width: "100%" }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // scrollEventThrottle={16}
          bounces={false}
          nestedScrollEnabled
        >
          <Div>
            <Div
              // py={18}
              row
              bg="#20B5C0"
              justifyContent="center"
              alignSelf="center"
              style={{
                width: widthPercentageToDP(70),
                height: heightPercentageToDP(3),
              }}
            >
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={14}
                color="#fff"
                mt={heightPercentageToDP(0.5)}
                allowFontScaling={false}
              >
                Closing Deals
              </Text>
            </Div>
            <FlatList
              style={{ width: widthPercentageToDP(70) }}
              data={reportData}
              bounces={false}
              renderItem={renderLeads}
              keyExtractor={(_, idx: number) => idx.toString()}
              ListHeaderComponent={headers(
                "Leads",
                "No of Leads",
                "Invoice Price",
                "Amount Paid",
              )}
            />
          </Div>

          <Div flex={1}>
            <Div
              // py={18}
              row
              bg="#20B5C0"
              justifyContent="center"
              style={{
                width: widthPercentageToDP(69),
                height: heightPercentageToDP(3),
              }}
            >
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={14}
                color="#fff"
                mt={heightPercentageToDP(0.5)}
                allowFontScaling={false}
              >
                Hot
              </Text>
            </Div>
            <FlatList
              style={{ width: widthPercentageToDP(69) }}
              data={reportData}
              bounces={false}
              renderItem={renderHot}
              keyExtractor={(_, idx: number) => idx.toString()}
              ListHeaderComponent={header(
                "No of Leads",
                "Estimated",
                "Quotation",
              )}
            />
          </Div>

          <Div flex={1}>
            <Div
              // py={18}
              row
              bg="#20B5C0"
              justifyContent="center"
              style={{
                width: widthPercentageToDP(69),
                height: heightPercentageToDP(3),
              }}
            >
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={14}
                color="#fff"
                mt={heightPercentageToDP(0.5)}
                allowFontScaling={false}
              >
                Status
              </Text>
            </Div>
            <FlatList
              style={{ width: widthPercentageToDP(69) }}
              data={reportData}
              bounces={false}
              renderItem={renderStatus}
              keyExtractor={(_, idx: number) => idx.toString()}
              ListHeaderComponent={header("Drop", "Cold", "Warm")}
            />
          </Div>
        </ScrollView>
      </Div>
      {reportData.length === 0 ? <NotFound /> : null}
    </ScrollView>
  )
}

export default AllScreen
