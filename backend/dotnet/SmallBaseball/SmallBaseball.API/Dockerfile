#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["SmallBaseball.API/SmallBaseball.API.csproj", "SmallBaseball.API/"]
COPY ["SmallBase.Cache/SmallBase.Cache.csproj", "SmallBase.Cache/"]
COPY ["SmallBaseball.Application/SmallBaseball.Application.csproj", "SmallBaseball.Application/"]
COPY ["SmallBaseball.Interfaces/SmallBaseball.Interfaces.csproj", "SmallBaseball.Interfaces/"]
COPY ["SmallBaseball.Models/SmallBaseball.Models.csproj", "SmallBaseball.Models/"]
COPY ["SmallBaseball.Repository.EF/SmallBaseball.Repository.EF.csproj", "SmallBaseball.Repository.EF/"]
RUN dotnet restore "SmallBaseball.API/SmallBaseball.API.csproj"
COPY . .
WORKDIR "/src/SmallBaseball.API"
RUN dotnet build "SmallBaseball.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SmallBaseball.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SmallBaseball.API.dll"]