var profileObj = {

    saveBasicProfileDetailsObj: function(name, dateOfBirth, height, cityId, educationId, professionId, religionId, casteId, profilePicture) {
      this.name = name || '0';
      this.dateOfBirth = dateOfBirth || '0';
      this.height = height || '0';
      this.cityId = cityId || '0';
      this.educationId = educationId || '0';
      this.professionId = professionId || '0';
      this.religionId = religionId || '0';
      this.casteId = casteId || '0';
      this.profilePicture = profilePicture || '0';
    }

    saveProfileDetailsObj: function(name, dateOfBirth, age, religionId, gender, educationId, professionId, salaryId, height, complexion, cityId, address, physicalDisablity, profilePicture) {
      this.name = name || '0';
      this.dateOfBirth = dateOfBirth || '0';
      this.age = age || '0';
      this.religionId = religionId || '0';
      this.gender = gender || '0';
      this.educationId = educationId || '0';
      this.professionId = professionId || '0';
      this.salaryId = salaryId || '0';
      this.height = height || '0';
      this.complexion = complexion || '0';
      this.cityId = cityId || '0';
      this.address = address || '0';
      this.physicalDisablity = physicalDisablity || '0';
      this.profilePicture = profilePicture || '0';

    }

    module.exports = profileObj;
